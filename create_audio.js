import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const musicDir = path.join(process.cwd(), 'public', 'assets', 'music');

if (!fs.existsSync(musicDir)) {
  fs.mkdirSync(musicDir, { recursive: true });
}

// Reliable royalty-free Indian instrument wedding music URLs from CDN
const audioUrls = {
  'wedding.mp3': 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
  'tilak.mp3': 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f603c0.mp3',
  'haldi.mp3': 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
  'mehandi.mp3': 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f603c0.mp3',
  'barat.mp3': 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c2688d0706.mp3',
  'vidai.mp3': 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_8843232c6f.mp3',
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function downloadAll() {
  console.log('Downloading Indian wedding audio tracks...');
  for (const [filename, url] of Object.entries(audioUrls)) {
    const dest = path.join(musicDir, filename);
    try {
      await downloadFile(url, dest);
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err);
    }
  }
  console.log('Audio track downloads completed!');
}

downloadAll();
