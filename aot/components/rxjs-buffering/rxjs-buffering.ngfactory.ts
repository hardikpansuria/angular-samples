/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-buffering/rxjs-buffering';
const styles_RxJsBuffering:any[] = ([] as any[]);
export const RenderType_RxJsBuffering:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_RxJsBuffering,
  data: {}
}
);
function View_RxJsBuffering_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'box'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.add(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  });
}
function View_RxJsBuffering_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'sum'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'SUM: ',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.calculation.sum;
    ck(v,1,0,currVal_0);
  });
}
export function View_RxJsBuffering_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Click three numbers to add'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RxJsBuffering_1)),
    import0.ɵdid(802816,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RxJsBuffering_2)),
    import0.ɵdid(16384,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import2.RxJsBuffering = v.component;
    const currVal_0:any = co.numbers;
    ck(v,5,0,currVal_0);
    const currVal_1:any = co.showSum;
    ck(v,8,0,currVal_1);
  },(null as any));
}
function View_RxJsBuffering_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ng-component',([] as any[]),(null as any),(null as any),(null as any),View_RxJsBuffering_0,RenderType_RxJsBuffering)),
    import0.ɵdid(114688,(null as any),0,import2.RxJsBuffering,([] as any[]),(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const RxJsBufferingNgFactory:import0.ComponentFactory<import2.RxJsBuffering> = import0.ɵccf('ng-component',import2.RxJsBuffering,View_RxJsBuffering_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3J4anMtYnVmZmVyaW5nL3J4anMtYnVmZmVyaW5nLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3J4anMtYnVmZmVyaW5nL3J4anMtYnVmZmVyaW5nLnRzIiwibmc6Ly8vVXNlcnMvdG9yL0RldmVsb3BtZW50L2FuZ3VsYXItMi1zYW1wbGVzL2NvbXBvbmVudHMvcnhqcy1idWZmZXJpbmcvcnhqcy1idWZmZXJpbmcudHMuUnhKc0J1ZmZlcmluZy5odG1sIiwibmc6Ly8vVXNlcnMvdG9yL0RldmVsb3BtZW50L2FuZ3VsYXItMi1zYW1wbGVzL2NvbXBvbmVudHMvcnhqcy1idWZmZXJpbmcvcnhqcy1idWZmZXJpbmcudHMuUnhKc0J1ZmZlcmluZ19Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxoMz5DbGljayB0aHJlZSBudW1iZXJzIHRvIGFkZDwvaDM+XG4gICAgPGRpdiAoY2xpY2spPVwiYWRkKG51bWJlcilcIiBjbGFzcz1cImJveFwiICpuZ0Zvcj1cImxldCBudW1iZXIgb2YgbnVtYmVyc1wiPnt7bnVtYmVyfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3VtXCIgKm5nSWY9XCJzaG93U3VtXCI+U1VNOiB7e2NhbGN1bGF0aW9uLnN1bX19PC9kaXY+XG4gICIsIjxuZy1jb21wb25lbnQ+PC9uZy1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNFSTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUs7UUFBQTtRQUFBO01BQUE7TUFBTDtJQUFBO0lBQXNFO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBO0lBQUE7Ozs7O01BQ3RFO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUM7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7Ozs7O0lBSHJDO0lBQ0k7SUFBSTtJQUErQjtJQUNuQztnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzRjtJQUN0RjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStEOzs7O0lBRHhCO0lBQXZDLFNBQXVDLFNBQXZDO0lBQ2lCO0lBQWpCLFNBQWlCLFNBQWpCOzs7OztJQ0hKO2dCQUFBOzs7SUFBQTs7OyJ9