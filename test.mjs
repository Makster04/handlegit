import { handler } from './index.mjs';

handler('here is my event')
.then(response => {
  console.log(response);
});
