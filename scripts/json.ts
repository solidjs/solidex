
import { writeFile } from 'fs';
import data from '../index';

writeFile('./dist/articles.json', JSON.stringify(data().articles), err => {
  if (err) {
    console.error(err)
    return
  }
});

writeFile('./dist/packages.json', JSON.stringify(data().packages), err => {
  if (err) {
    console.error(err)
    return
  }
});

writeFile('./dist/videos.json', JSON.stringify(data().videos), err => {
  if (err) {
    console.error(err)
    return
  }
});

writeFile('./dist/podcasts.json', JSON.stringify(data().podcasts), err => {
  if (err) {
    console.error(err)
    return
  }
});
