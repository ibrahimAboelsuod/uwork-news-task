import * as functions from 'firebase-functions';
import * as RSSParser from 'rss-parser';

export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    response.send('HELLO WORLD');
  }
);

export const googleNewsRSS = functions.https.onRequest(
  async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');

    let url = 'https://news.google.com/rss';

    if (!!request.query) {
      const params = Object.keys(request.query).map((queryKey) => {
        return `${queryKey}=${request.query[queryKey]}`;
      });

      if (params.length > 0) {
        url += '/search?' + params.join('&');
      }
    }

    const parser = new RSSParser();
    const feed = await parser.parseURL(url);

    response.send(feed);

    // return feed;
  }
);
