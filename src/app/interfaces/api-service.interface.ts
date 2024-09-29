import { Observable } from "rxjs";

export interface IApiService {
    get: (path: string, options: { [param: string]: unknown }) => Observable<unknown>,
    post: (path: string, body: unknown, options: { [param: string]: unknown }) => Observable<unknown>,
    put: (path: string, body: unknown, options: { [param: string]: unknown }) => Observable<unknown>,
    delete: (path: string, options: { [param: string]: unknown }) => Observable<unknown>,
}