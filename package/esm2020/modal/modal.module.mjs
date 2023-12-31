import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MdbModalContainerComponent } from './modal-container.component';
import { MdbModalService } from './modal.service';
import * as i0 from "@angular/core";
export class MdbModalModule {
}
MdbModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: MdbModalModule, declarations: [MdbModalContainerComponent], imports: [CommonModule, OverlayModule, PortalModule], exports: [MdbModalContainerComponent] });
MdbModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalModule, providers: [MdbModalService], imports: [CommonModule, OverlayModule, PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, PortalModule],
                    exports: [MdbModalContainerComponent],
                    declarations: [MdbModalContainerComponent],
                    providers: [MdbModalService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRbEQsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFIViwwQkFBMEIsYUFGL0IsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLGFBQ3pDLDBCQUEwQjs0R0FJekIsY0FBYyxhQUZkLENBQUMsZUFBZSxDQUFDLFlBSGxCLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWTsyRkFLeEMsY0FBYztrQkFOMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZGJNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxuICBleHBvcnRzOiBbTWRiTW9kYWxDb250YWluZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtNZGJNb2RhbENvbnRhaW5lckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW01kYk1vZGFsU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYk1vZGFsTW9kdWxlIHt9XG4iXX0=