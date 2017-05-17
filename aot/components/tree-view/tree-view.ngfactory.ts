/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/tree-view/tree-view';
const styles_TreeView:any[] = ([] as any[]);
export const RenderType_TreeView:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_TreeView,
  data: {}
}
);
function View_TreeView_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
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
function View_TreeView_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TreeView_3)),
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
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'tree-view',([] as any[]),(null as any),(null as any),(null as any),View_TreeView_0,RenderType_TreeView)),
      import0.ɵdid(49152,(null as any),0,import2.TreeView,([] as any[]),{directories: [
        0,
        'directories'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n        ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = (<any>v.parent).context.$implicit.files;
    ck(v,5,0,currVal_0);
    const currVal_1:any = (<any>v.parent).context.$implicit.directories;
    ck(v,9,0,currVal_1);
  },(null as any));
}
function View_TreeView_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'iconButton'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>v.context.$implicit.toggle()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[[
        'type',
        'checkbox'
      ]
      ],[[
        8,
        'checked',
        0
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>v.context.$implicit.check()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      ' ',
      '\n\n        '
    ]
    )),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TreeView_2)),
    import0.ɵdid(16384,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n    ']))
  ]
  ,(ck,v) => {
    const currVal_3:any = v.context.$implicit.expanded;
    ck(v,7,0,currVal_3);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.getIcon();
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit.checked;
    ck(v,4,0,currVal_1);
    const currVal_2:any = v.context.$implicit.name;
    ck(v,5,0,currVal_2);
  });
}
export function View_TreeView_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TreeView_1)),
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
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n\n']))
  ]
  ,(ck,v) => {
    var co:import2.TreeView = v.component;
    const currVal_0:any = co.directories;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_TreeView_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'tree-view',([] as any[]),(null as any),(null as any),(null as any),View_TreeView_0,RenderType_TreeView)),
    import0.ɵdid(49152,(null as any),0,import2.TreeView,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const TreeViewNgFactory:import0.ComponentFactory<import2.TreeView> = import0.ɵccf('tree-view',import2.TreeView,View_TreeView_Host_0,{directories: 'directories'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpZXcubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvdG9yL0RldmVsb3BtZW50L2FuZ3VsYXItMi1zYW1wbGVzL2NvbXBvbmVudHMvdHJlZS12aWV3L3RyZWUtdmlldy50cyIsIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpZXcuaHRtbCIsIm5nOi8vL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpZXcudHMuVHJlZVZpZXdfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8dWw+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBkaXIgb2YgZGlyZWN0b3JpZXNcIj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25CdXR0b25cIiAoY2xpY2spPVwiZGlyLnRvZ2dsZSgpXCI+e3tkaXIuZ2V0SWNvbigpfX08L3NwYW4+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImRpci5jaGVja2VkXCIgKGNsaWNrKT1cImRpci5jaGVjaygpXCIgLz4ge3sgZGlyLm5hbWUgfX1cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlyLmV4cGFuZGVkXCI+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGZpbGUgb2YgZGlyLmZpbGVzXCI+e3tmaWxlfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPHRyZWUtdmlldyBbZGlyZWN0b3JpZXNdPVwiZGlyLmRpcmVjdG9yaWVzXCI+PC90cmVlLXZpZXc+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2xpPlxuPC91bD5cblxuIiwiPHRyZWUtdmlldz48L3RyZWUtdmlldz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1FnQjtJQUFtQztNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBQTtJQUFBOzs7OztJQUgzQztJQUEwQjtJQUV0QjtJQUFJO0lBQ0E7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBZ0Q7SUFDL0M7SUFFTDtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXVEOzs7SUFIL0M7SUFBSixTQUFJLFNBQUo7SUFHTztJQUFYLFNBQVcsU0FBWDs7Ozs7SUFWUjtJQUFvQztNQUVoQztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUF5QjtRQUFBO1FBQUE7TUFBQTtNQUF6QjtJQUFBO0lBQWdEO01BQUE7TUFBQTtJQUFBO0lBQUE7TUFBd0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQStDO1FBQUE7UUFBQTtNQUFBO01BQS9DO0lBQUE7SUFBdUU7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUUvSTtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBUU07OztJQVJEO0lBQUwsU0FBSyxTQUFMOztJQUZnRDtJQUFBO0lBQStDO0lBQXZCLFNBQXVCLFNBQXZCO0lBQXVFO0lBQUE7Ozs7O0lBSHZKO0lBQUk7SUFDQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQWNLO0lBQ0o7Ozs7SUFmRztJQUFKLFNBQUksU0FBSjs7Ozs7SUNESjtnQkFBQTs7OzsifQ==