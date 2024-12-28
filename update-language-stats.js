const axios = require('axios');
const fs = require('fs');

const username = 'MBBXMESBAH';
const token = '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';

async function fetchLanguages() {
  const repos = await axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: { Authorization: `token ${token}` },
  });

  const languageStats = {};
  let totalSize = 0;

  for (const repo of repos.data) {
    const languages = await axios.get(repo.languages_url, {
      headers: { Authorization: `token ${token}` },
    });

    for (const [lang, size] of Object.entries(languages.data)) {
      languageStats[lang] = (languageStats[lang] || 0) + size;
      totalSize += size;
    }
  }

  const percentages = Object.entries(languageStats).map(([lang, size]) => ({
    language: lang,
    percentage: ((size / totalSize) * 100).toFixed(2),
  }));

  return percentages;
}

fetchLanguages()
  .then((data) => {
    fs.writeFileSync('language-stats.json', JSON.stringify(data, null, 2));
    console.log('Language stats updated:', data);
  })
  .catch((error) => console.error(error));
