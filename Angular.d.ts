declare interface AngularVersion {
    full: string;
    major: number;
    minor: number;
    dot: number;
    codeName: string;
}

declare interface AngularModule {
    requires: string[];
    name: string;
    provider(name: string, providerType: Function): AngularModule;
    factory(name: string, providerFunction: Function): AngularModule;
    service(name: string, constructor: Function): AngularModule;
    value(name: string, object: any): AngularModule;
    constant(name: string, object: any): AngularModule;
    filter(name: string, filterFactory: Function): AngularModule;
    controller(name: string, constructor: Function): AngularModule;
    directive(name: string, directiveFactory: Function): AngularModule;
    config(configFn: Function): AngularModule;
    run(initializationFn: Function): AngularModule;
}

declare interface AngularInjector {
    get(name: string): any;
    invoke(fn: Function, self?: any, locals?: any): any;
    instantiate(constructor: any, locals?: Object): any;
    annotate(fn: Function): string[];
    annotate(fns: string[]): string[];
    annotate(fns: Function[]): string[];
}

declare interface AngularStatic {
    bootstrap(element: Element, modules: string[]): any;
    bootstrap(element: Element, modules: Function[]): any;
    copy(source: any, destination: Object): Object;
    copy(source: any, destination: Array): Array;
    extend(dest: Object, ...src: any[]): Object;
    equals(o1: any, o2: any): bool;
    element(element: string): jQuery;
    element(element: Element): jQuery;
    forEach(obj: Array, iterator: (value: any, index?: number) => void, context?: any): Array;
    forEach(obj: Object, iterator: (value: any, key?: string) => void, context?: any): Object;
    injector(modules: string[]): AngularInjector;
    injector(modules: Function[]): AngularInjector;
    module(name: string, requesires?: string[], configFn?: Function): AngularModule;
    module(name: string, configFn: Function): AngularModule;
    noop(): void;
    bind(self: Object, fn: Function, ...args: any[]): Function;
    toJson(obj: any, pretty: bool): string;
    fromJson(json: string): any;
    identity(...$: any[]): any;
    isUndefined(value: any): bool;
    isDefined(value: any): bool;
    isObject(value: any): bool;
    isString(value: any): bool;
    isNumber(value: any): bool;
    isDate(value: any): bool;
    isArray(value: any): bool;
    isFunction(value: any): bool;
    isElement(value: any): bool;
    lowercase(string: string): string;
    uppercase(string: string): string;
    //callbacks
    version: AngularVersion;
}

declare module ng {

    export interface Deregistration {
        ();
    }

    export interface CacheInfo {
        id: string;
        size: number;
    }

    export interface Cache {
        put(key: string, value: any);
        get(key: string): any;
        remove(key: string);
        removeALl();
        destroy();
        info(): CacheInfo;
    }

    export interface Provider {
        register(name: string, constructor: Function);
    }

    export interface HttpConfig {
        method: string;
        url: string;
        params: Object;
        data: any;
        headers: Object;
        transformRequest: (data: any, headersGetter: () => Object) => void;
        transformResponse: (data: any, headersGetter: () => Object) => void;
        cache: Cache;
        timeout: number;
        withCredentials: bool;
        responseType: string;
    }

    export interface HttpResponse {
        data: any;
        status: number;
        headers: (name: string) => string;
        config: HttpConfig;
    }

    export interface HttpPromise {
        then(success: (response: HttpResponse) => void, error?: (response: HttpResponse) => void);
        success(callback: (response: HttpResponse) => void);
        error(callback: (response: HttpResponse) => void);
    }

    export interface Http {
        (config: HttpConfig) : HttpPromise;
        pendingRequests: HttpConfig[];
        get(url: string, config?: HttpConfig): HttpPromise;
        delete(url: string, config?: HttpConfig): HttpPromise;
        head(url: string, config?: HttpConfig): HttpPromise;
        jsonp(url: string, config?: HttpConfig): HttpPromise;
        post(url: string, data: any, config?: HttpConfig): HttpPromise;
        put(url: string, data: any, config?: HttpConfig): HttpPromise;
        defaults: HttpConfig;
    }

    export interface InterpolateProvider {
        startSymbol(): string;
        startSymbol(value: string): InterpolateProvider;
        endSymbol(): string;
        endSymbol(value: string): InterpolateProvider;
    }

    export interface Interpolate {
        (text: string, mustHaveExpression?: bool): (context: Object) => string;
        startSymbol(): string;
        endSymbol(): string;
    }
    
    export interface Location {
        absUrl(): string;
        url(): string;
        url(url: string): Location;
        protocol(): string;
        host(): string;
        port(): number;
        path(): string;
        path(path: string): Location;
        search(): string;
        search(search: string): Location;
        search(search: string, paramValue: string): Location;
        search(search: Object): Location;
        hash(): string;
        hash(hash: string): Location;
        replace(): Location;
    }
    
    export interface LocationProvider {
        hashPrefix(): string;
        hashPrefix(prefix: string): LocationProvider;
        html5Mode(): any;
        html5Mode(mode: string): LocationProvider;
    }
    
    export interface Log {
        log(...args: any[]);
        warn(...args: any[]);
        info(...args: any[]);
        error(...args: any[]);
    }
    
    export interface Promise {
        then(successCallback: (result: any) => any, errorCallback?: (reason: any) => any): Promise;
    }
    
    export interface Deferred {
        resolve(value);
        reject(reason);
        promise: Promise;
    }

    export interface DeferredFactory {
        defer(): Deferred;
        reject(reason: any): Promise;
        when(value: any, success?: (result: any) => any, error?: (reason: any) => any): Promise;
        all(promises: Promise[]): Promise;
    }
    
    export interface ScopeProvider {
        digestTtl(limit: number);
    }

    export interface Scope {
        $new(isolate: bool): Scope;
        $watch(watchExpression: string, listener?: string, objectEquality?: bool): Deregistration;
        $watch(watchExpression: string, listener?: (newValue?: any, oldValue?: any, scope?: Scope) => any, objectEquality?: bool): Deregistration;
        $watch(watchExpression: (scope: Scope) => any, listener?: string, objectEquality?: bool): Deregistration;
        $watch(watchExpression: (scope: Scope) => any, listener?: (newValue?: any, oldValue?: any, scope?: Scope) => any, objectEquality?: bool): Deregistration;
        $digest();
        $destroy();
        $eval(): any;
        $eval(expression: string): any;
        $eval(expression: (scope?: Scope) => any): any;
        $evalAsync();
        $evalAsync(expression: string);
        $evalAsync(expression: (scope?: Scope) => any);
        $apply(): any;
        $apply(expression: string): any;
        $apply(expression: (scope?: Scope) => any): any;
        $on(name: string, listener: (event: Event) => any): Deregistration;
        $emit(name: string, ...args: any[]): Event;
        $broadcast(name: string, ...args: any[]): Event;
    }

    export interface RouteMap {
        [key: string]: Function;
    }

    export interface Route {
        controller?: any;
        template?: string;
        templateUrl?: string;
        resolve?: RouteMap;
        key: string;
        factory: any;
        redirectTo?: any;
    }
    
    export interface RouteProvider {
        when(path: string, route: Route) : RouteProvider;
        otherwise(route: Route): RouteProvider;
    }
    
    export interface RouteStatic {
        current: Route;
        routes: Route[];
        reload();
    }
    
    export interface Timeout {
        (fn: Function, delay?: number, invokeApply?: bool): Promise;
        cancel(promise?: Promise): bool;
    }
}

declare module ngCookies {
    export interface Cookies {
        [name: string]: Object;
    }

    export interface CookieStore {
        get(key: string): Object;
        put(key: string, value: Object);
        remove(key: string);
    }
}

declare module ngResource {
    export interface Action {
        method?: string;
        params?: Object;
        isArray?: bool;
        headers?: Object;
    }
    
    export interface ActionHash {
        [action: string]: Action;
    }
    
    export interface Resource {
        get(parameters?: Object, success?: Function, error?: Function): ResourceItem;
        save(postData: Object, success?: Function, error?: Function);
        save(postData: Array, success?: Function, error?: Function);
        save(parameters: Object, postData: Object, success?: Function, error?: Function);
        save(parameters: Object, postData: Array, success?: Function, error?: Function);
        query(parameters?: Object, success?: Function, error?: Function): ResourceItem[];
        remove(postData: Object, success?: Function, error?: Function);
        remove(postData: Array, success?: Function, error?: Function);
        remove(parameters: Object, postData: Object, success?: Function, error?: Function);
        remove(parameters: Object, postData: Array, success?: Function, error?: Function);
        delete(postData: Object, success?: Function, error?: Function);
        delete(postData: Array, success?: Function, error?: Function);
        delete(parameters: Object, postData: Object, success?: Function, error?: Function);
        delete(parameters: Object, postData: Array, success?: Function, error?: Function);
    }
    
    export interface ResourceItem {
        $save(parameters?: Object, success?: Function, error?: Function);
        $remove(parameters?: Object, success?: Function, error?: Function);
        $delete(parameters?: Object, success?: Function, error?: Function);
    }
}

declare var angular: AngularStatic;
declare function $anchorScroll();
declare function $cacheFactory(cacheId: string, options?: Object): ng.Cache;
declare var $templateCache: ng.Cache;
// TODO: $compile
declare var $controllerProvider: ng.Provider;
declare function $controller(constructor: Function, locals: Object): Object;
declare function $controller(constructor: string, locals: Object): Object;
declare var $document: jQuery;
declare function $exceptionHandler(exception: Error, cause?: string);
declare var $filterProvider: ng.Provider;
declare function $filter(name: string): Function;
declare var $http: ng.Http;
declare var $interpolateProvider: ng.InterpolateProvider;
declare var $interpolate: ng.Interpolate;
declare var $locale: string;
declare var $location: ng.Location;
declare var $locationProvider: ng.LocationProvider;
declare var $log: ng.Log;
declare function $parse(expression: string): (context: Object, locals: Object) => any;
declare var $q: ng.DeferredFactory;
declare var $rootElement: jQuery;
declare var $rootScopeProvider: ng.ScopeProvider;
declare var $rootScope: ng.Scope;
declare var $routeProvider: ng.RouteProvider;
declare var $route: ng.RouteStatic;
declare var $routeParams: Object;
declare var $timeout: ng.Timeout;
declare var $window: Window;

declare var $cookies: ngCookies.Cookies;
declare var $cookieStore: ngCookies.CookieStore;

declare function $resource(url: string, paramDefaults?: Object, actions?: ngResource.ActionHash): ngResource.Resource;

declare function $sanitize(html: string): string;