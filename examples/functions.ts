// noinspection ES6PreferShortImport

import { run } from './';
import { Session } from '../src';

import { InvokeService } from '../src/serverless/functions/v1/invoke';


run(async (session: Session) => {
    const invokeService =  InvokeService(session);
    const resp = await invokeService.invoke('d4e9s9vmnd5lhlc8gmq2');
    console.log(`Got function response with keys`, Object.keys(resp));

    const myWrapped = invokeService.wrap('d4e9s9vmnd5lhlc8gmq2');
    const data = await myWrapped();
    console.log(data);
});
