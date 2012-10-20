// jQuery Ligth definition file
// can be replaced with full jQuery definition file

interface JQueryEventObject extends Event {
   data: any;
   delegateTarget: Element;
   isDefaultPrevented(): bool;
   isImmediatePropogationStopped(): bool;
   isPropogationStopped(): bool;
   namespace: string;
   preventDefault(): any;
   relatedTarget: Element;
   result: any;
   stopImmediatePropagation();
   stopPropagation();
   pageX: number;
   pageY: number;
   which: number;
   metaKey: any;
}

interface JQuery {
   addClass(classNames: string): JQuery;
   addClass(func: (index: any, currentClass: any) => JQuery);

   after(...content: any[]): JQuery;
   after(func: (index: any) => any);

   append(...content: any[]): JQuery;
   append(func: (index: any, html: any) => any);

   attr(attributeName: string): string;
   attr(attributeName: string, value: any): JQuery;
   attr(map: { [key: any]: any; }): JQuery;
   attr(attributeName: string, func: (index: any, attr: any) => any): JQuery;

   bind(eventType: string, eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
   bind(eventType: string, eventData: any, preventBubble:bool): JQuery;
   bind(eventType: string, preventBubble:bool): JQuery;
   bind(...events: any[]);

   children(selector?: any): JQuery;

   clone(withDataAndEvents?: bool, deepWithDataAndEvents?: bool): JQuery;
   
   contents(): JQuery;

   css(e: any, propertyName: string, value?: any);
   css(e: any, propertyName: any, value?: any);

   data(key: string, value: any): JQuery;
   data(obj: { [key: string]: any; }): JQuery;
   data(key?: string): any;

   eq(index: number): JQuery;

   find(selector: string): JQuery;
   find(element: any): JQuery;
   find(obj: JQuery): JQuery;

   hasClass(className: string): bool;

   html(htmlString: string): JQuery;
   html(): string;

   next(selector?: string): JQuery;

   parent(selector?: string): JQuery;

   prepend(...content: any[]): JQuery;
   prepend(func: (index: any, html: any) =>any): JQuery;

   prop(propertyName: string): string;
   prop(propertyName: string, value: any): JQuery;
   prop(map: any): JQuery;
   prop(propertyName: string, func: (index: any, oldPropertyValue: any) => any): JQuery;
   
   ready(handler: any): JQuery;

   remove(selector?: any): JQuery;

   removeAttr(attributeName: any): JQuery;

   removeClass(className?: any): JQuery;
   removeClass(func: (index: any, cls: any) => any): JQuery;

   removeData(nameOrList?: any): JQuery;

   replaceWith(func: any): JQuery;
   
   text(textString: string): JQuery;
   text(): string;

   toggleClass(className: any, swtch?: bool): JQuery;
   toggleClass(swtch?: bool): JQuery;
   toggleClass(func: (index: any, cls: any, swtch: any) => any): JQuery;

   unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
   unbind(eventType: string, fls: bool): JQuery;
   unbind(evt: any): JQuery;

   val(): any;
   val(value: string[]): JQuery;
   val(value: string): JQuery;
   val(func: (index: any, value: any) => any): JQuery;

   wrap(wrappingElement: any): JQuery;
   wrap(func: (index: any) =>any): JQuery;
}