import { Component, ChangeDetectionStrategy, HostBinding, ViewChild, ContentChild, ElementRef, } from '@angular/core';
import { MdbAbstractFormControl } from './form-control';
import { MdbLabelDirective } from './label.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
export class MdbFormControlComponent {
    constructor(_renderer, _contentObserver, _elementRef, _ngZone) {
        this._renderer = _renderer;
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this.outline = true;
        this.display = true;
        this._destroy$ = new Subject();
        this._notchLeadingLength = 9;
        this._labelMarginLeft = 0;
        this._labelGapPadding = 8;
        this._labelScale = 0.8;
        this._recalculateGapWhenVisible = false;
    }
    get input() {
        return this._formControl.input;
    }
    ngAfterContentInit() {
        if (this._label) {
            setTimeout(() => {
                this._updateBorderGap();
            }, 0);
        }
        else {
            this._renderer.addClass(this.input, 'placeholder-active');
        }
        this._updateLabelActiveState();
        if (this._label) {
            this._contentObserver
                .observe(this._label.nativeElement)
                .pipe(takeUntil(this._destroy$))
                .subscribe(() => {
                this._updateBorderGap();
            });
        }
        this._formControl.stateChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._updateLabelActiveState();
            if (this._label) {
                this._updateBorderGap();
            }
        });
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(takeUntil(this._destroy$)).subscribe(() => {
                if (this._label && this._recalculateGapWhenVisible) {
                    this._updateBorderGap();
                }
            });
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.unsubscribe();
    }
    _getLabelWidth() {
        return this._label.nativeElement.clientWidth * this._labelScale + this._labelGapPadding;
    }
    _updateBorderGap() {
        // Element is in DOM but is not visible, we need to recalculate the gap when element
        // is displayed. This problem may occur in components such as tabs where content of
        // inactive tabs has display:none styles
        if (this._isHidden()) {
            this._recalculateGapWhenVisible = true;
            return;
        }
        const notchLeadingWidth = `${this._labelMarginLeft + this._notchLeadingLength}px`;
        const notchMiddleWidth = `${this._getLabelWidth()}px`;
        this._notchLeading.nativeElement.style.width = notchLeadingWidth;
        this._notchMiddle.nativeElement.style.width = notchMiddleWidth;
        this._label.nativeElement.style.marginLeft = `${this._labelMarginLeft}px`;
        this._recalculateGapWhenVisible = false;
    }
    _updateLabelActiveState() {
        if (this._isLabelActive()) {
            this._renderer.addClass(this.input, 'active');
        }
        else {
            this._renderer.removeClass(this.input, 'active');
        }
    }
    _isLabelActive() {
        return this._formControl && this._formControl.labelActive;
    }
    _isHidden() {
        const el = this._elementRef.nativeElement;
        return !el.offsetHeight && !el.offsetWidth;
    }
}
MdbFormControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbFormControlComponent, deps: [{ token: i0.Renderer2 }, { token: i1.ContentObserver }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MdbFormControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: MdbFormControlComponent, selector: "mdb-form-control", host: { properties: { "class.form-outline": "this.outline", "class.d-block": "this.display" } }, queries: [{ propertyName: "_formControl", first: true, predicate: MdbAbstractFormControl, descendants: true, static: true }, { propertyName: "_label", first: true, predicate: MdbLabelDirective, descendants: true, read: ElementRef, static: true }], viewQueries: [{ propertyName: "_notchLeading", first: true, predicate: ["notchLeading"], descendants: true, static: true }, { propertyName: "_notchMiddle", first: true, predicate: ["notchMiddle"], descendants: true, static: true }], ngImport: i0, template: "<ng-content></ng-content>\n<div class=\"form-notch\">\n  <div #notchLeading class=\"form-notch-leading\"></div>\n  <div #notchMiddle class=\"form-notch-middle\"></div>\n  <div class=\"form-notch-trailing\"></div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbFormControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-form-control', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n<div class=\"form-notch\">\n  <div #notchLeading class=\"form-notch-leading\"></div>\n  <div #notchMiddle class=\"form-notch-middle\"></div>\n  <div class=\"form-notch-trailing\"></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.ContentObserver }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { _notchLeading: [{
                type: ViewChild,
                args: ['notchLeading', { static: true }]
            }], _notchMiddle: [{
                type: ViewChild,
                args: ['notchMiddle', { static: true }]
            }], _formControl: [{
                type: ContentChild,
                args: [MdbAbstractFormControl, { static: true }]
            }], _label: [{
                type: ContentChild,
                args: [MdbLabelDirective, { static: true, read: ElementRef }]
            }], outline: [{
                type: HostBinding,
                args: ['class.form-outline']
            }], display: [{
                type: HostBinding,
                args: ['class.d-block']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21kYi1hbmd1bGFyLXVpLWtpdC9mb3Jtcy9mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L2Zvcm1zL2Zvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEdBS1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU8zQyxNQUFNLE9BQU8sdUJBQXVCO0lBYWxDLFlBQ1UsU0FBb0IsRUFDcEIsZ0JBQWlDLEVBQ2pDLFdBQXVCLEVBQ3ZCLE9BQWU7UUFIZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVhVLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQWFwQyxjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFFaEQsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxHQUFHLENB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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFFaEMsT0FBTztzQkFBekMsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBQ0gsT0FBTztzQkFBcEMsV0FBVzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdDaGlsZCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kYkFic3RyYWN0Rm9ybUNvbnRyb2wgfSBmcm9tICcuL2Zvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBNZGJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItZm9ybS1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJGb3JtQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ25vdGNoTGVhZGluZycsIHsgc3RhdGljOiB0cnVlIH0pIF9ub3RjaExlYWRpbmc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25vdGNoTWlkZGxlJywgeyBzdGF0aWM6IHRydWUgfSkgX25vdGNoTWlkZGxlOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKE1kYkFic3RyYWN0Rm9ybUNvbnRyb2wsIHsgc3RhdGljOiB0cnVlIH0pIF9mb3JtQ29udHJvbDogTWRiQWJzdHJhY3RGb3JtQ29udHJvbDxhbnk+O1xuICBAQ29udGVudENoaWxkKE1kYkxhYmVsRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBfbGFiZWw6IEVsZW1lbnRSZWY7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb3JtLW91dGxpbmUnKSBvdXRsaW5lID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kLWJsb2NrJykgZGlzcGxheSA9IHRydWU7XG5cbiAgZ2V0IGlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbC5pbnB1dDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgcmVhZG9ubHkgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF9ub3RjaExlYWRpbmdMZW5ndGggPSA5O1xuICBwcml2YXRlIF9sYWJlbE1hcmdpbkxlZnQgPSAwO1xuICBwcml2YXRlIF9sYWJlbEdhcFBhZGRpbmcgPSA4O1xuICBwcml2YXRlIF9sYWJlbFNjYWxlID0gMC44O1xuICBwcml2YXRlIF9yZWNhbGN1bGF0ZUdhcFdoZW5WaXNpYmxlID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sYWJlbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvcmRlckdhcCgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuaW5wdXQsICdwbGFjZWhvbGRlci1hY3RpdmUnKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlTGFiZWxBY3RpdmVTdGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICB0aGlzLl9jb250ZW50T2JzZXJ2ZXJcbiAgICAgICAgLm9ic2VydmUodGhpcy5fbGFiZWwubmF0aXZlRWxlbWVudClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyR2FwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2Zvcm1Db250cm9sLnN0YXRlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVMYWJlbEFjdGl2ZVN0YXRlKCk7XG4gICAgICBpZiAodGhpcy5fbGFiZWwpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9yZGVyR2FwKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsICYmIHRoaXMuX3JlY2FsY3VsYXRlR2FwV2hlblZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVCb3JkZXJHYXAoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAqIHRoaXMuX2xhYmVsU2NhbGUgKyB0aGlzLl9sYWJlbEdhcFBhZGRpbmc7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCb3JkZXJHYXAoKTogdm9pZCB7XG4gICAgLy8gRWxlbWVudCBpcyBpbiBET00gYnV0IGlzIG5vdCB2aXNpYmxlLCB3ZSBuZWVkIHRvIHJlY2FsY3VsYXRlIHRoZSBnYXAgd2hlbiBlbGVtZW50XG4gICAgLy8gaXMgZGlzcGxheWVkLiBUaGlzIHByb2JsZW0gbWF5IG9jY3VyIGluIGNvbXBvbmVudHMgc3VjaCBhcyB0YWJzIHdoZXJlIGNvbnRlbnQgb2ZcbiAgICAvLyBpbmFjdGl2ZSB0YWJzIGhhcyBkaXNwbGF5Om5vbmUgc3R5bGVzXG5cbiAgICBpZiAodGhpcy5faXNIaWRkZW4oKSkge1xuICAgICAgdGhpcy5fcmVjYWxjdWxhdGVHYXBXaGVuVmlzaWJsZSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm90Y2hMZWFkaW5nV2lkdGggPSBgJHt0aGlzLl9sYWJlbE1hcmdpbkxlZnQgKyB0aGlzLl9ub3RjaExlYWRpbmdMZW5ndGh9cHhgO1xuICAgIGNvbnN0IG5vdGNoTWlkZGxlV2lkdGggPSBgJHt0aGlzLl9nZXRMYWJlbFdpZHRoKCl9cHhgO1xuXG4gICAgdGhpcy5fbm90Y2hMZWFkaW5nLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBub3RjaExlYWRpbmdXaWR0aDtcbiAgICB0aGlzLl9ub3RjaE1pZGRsZS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gbm90Y2hNaWRkbGVXaWR0aDtcbiAgICB0aGlzLl9sYWJlbC5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBgJHt0aGlzLl9sYWJlbE1hcmdpbkxlZnR9cHhgO1xuXG4gICAgdGhpcy5fcmVjYWxjdWxhdGVHYXBXaGVuVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTGFiZWxBY3RpdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNMYWJlbEFjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmlucHV0LCAnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaW5wdXQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0xhYmVsQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbCAmJiB0aGlzLl9mb3JtQ29udHJvbC5sYWJlbEFjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgcmV0dXJuICFlbC5vZmZzZXRIZWlnaHQgJiYgIWVsLm9mZnNldFdpZHRoO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48ZGl2IGNsYXNzPVwiZm9ybS1ub3RjaFwiPlxuICA8ZGl2ICNub3RjaExlYWRpbmcgY2xhc3M9XCJmb3JtLW5vdGNoLWxlYWRpbmdcIj48L2Rpdj5cbiAgPGRpdiAjbm90Y2hNaWRkbGUgY2xhc3M9XCJmb3JtLW5vdGNoLW1pZGRsZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ub3RjaC10cmFpbGluZ1wiPjwvZGl2PlxuPC9kaXY+XG4iXX0=