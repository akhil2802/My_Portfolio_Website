import { ContentChildren, Directive, forwardRef, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { from, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { MdbRadioDirective } from './radio-button.directive';
import * as i0 from "@angular/core";
export const MDB_RADIO_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
    useExisting: forwardRef(() => MdbRadioGroupDirective),
    multi: true,
};
export class MdbRadioGroupDirective {
    constructor() {
        this._disabled = false;
        this._destroy$ = new Subject();
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        if (this.radios) {
            this._updateChecked();
        }
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        if (this.radios) {
            this._updateNames();
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = disabled;
        if (this.radios) {
            this._updateDisabled();
        }
    }
    ngAfterContentInit() {
        this._updateNames();
        this._updateDisabled();
        this.radios.changes
            .pipe(startWith(this.radios), switchMap((radios) => from(Promise.resolve(radios))), takeUntil(this._destroy$))
            .subscribe(() => this._updateRadiosState());
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    _updateRadiosState() {
        this._updateNames();
        this._updateChecked();
        this._updateDisabled();
    }
    _updateNames() {
        this.radios.forEach((radio) => radio._updateName(this.name));
    }
    _updateChecked() {
        this.radios.forEach((radio) => {
            const isChecked = radio.value === this._value;
            radio._updateChecked(isChecked);
        });
    }
    _updateDisabled() {
        this.radios.forEach((radio) => radio._updateDisabledState(this._disabled));
    }
    // Control value accessor methods
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
        this._updateDisabled();
    }
    writeValue(value) {
        this.value = value;
    }
}
MdbRadioGroupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRadioGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MdbRadioGroupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: MdbRadioGroupDirective, selector: "[mdbRadioGroup]", inputs: { value: "value", name: "name", disabled: "disabled" }, providers: [MDB_RADIO_GROUP_VALUE_ACCESSOR], queries: [{ propertyName: "radios", predicate: MdbRadioDirective, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRadioGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbRadioGroup]',
                    providers: [MDB_RADIO_GROUP_VALUE_ACCESSOR],
                }]
        }], propDecorators: { radios: [{
                type: ContentChildren,
                args: [MdbRadioDirective, { descendants: true }]
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L3JhZGlvL3JhZGlvLWdyb3VwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxHQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQVE7SUFDakQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQix5RkFBeUY7SUFDekYsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFPRixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBMkNVLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFeEMsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQTBEdEI7SUFsR0MsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FB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LENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzttSEFwR1Usc0JBQXNCO3VHQUF0QixzQkFBc0IsMEdBRnRCLENBQUMsOEJBQThCLENBQUMsaURBRzFCLGlCQUFpQjsyRkFEdkIsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzhCQUU0RCxNQUFNO3NCQUFoRSxlQUFlO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFHckQsS0FBSztzQkFEUixLQUFLO2dCQWFGLElBQUk7c0JBRFAsS0FBSztnQkFhRixRQUFRO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZyb20sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZGJSYWRpb0RpcmVjdGl2ZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBNREJfUkFESU9fR1JPVVBfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZSwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1kYlJhZGlvR3JvdXBEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJSYWRpb0dyb3VwXScsXG4gIHByb3ZpZGVyczogW01EQl9SQURJT19HUk9VUF9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYlJhZGlvR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJSYWRpb0RpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSByYWRpb3M6IFF1ZXJ5TGlzdDxNZGJSYWRpb0RpcmVjdGl2ZT47XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUNoZWNrZWQoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIGlmICh0aGlzLnJhZGlvcykge1xuICAgICAgdGhpcy5fdXBkYXRlTmFtZXMoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIGlmICh0aGlzLnJhZGlvcykge1xuICAgICAgdGhpcy5fdXBkYXRlRGlzYWJsZWQoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZU5hbWVzKCk7XG4gICAgdGhpcy5fdXBkYXRlRGlzYWJsZWQoKTtcblxuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5yYWRpb3MpLFxuICAgICAgICBzd2l0Y2hNYXAoKHJhZGlvczogUXVlcnlMaXN0PE1kYlJhZGlvRGlyZWN0aXZlPikgPT4gZnJvbShQcm9taXNlLnJlc29sdmUocmFkaW9zKSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVJhZGlvc1N0YXRlKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSYWRpb3NTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGVOYW1lcygpO1xuICAgIHRoaXMuX3VwZGF0ZUNoZWNrZWQoKTtcbiAgICB0aGlzLl91cGRhdGVEaXNhYmxlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTmFtZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW86IE1kYlJhZGlvRGlyZWN0aXZlKSA9PiByYWRpby5fdXBkYXRlTmFtZSh0aGlzLm5hbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW86IE1kYlJhZGlvRGlyZWN0aXZlKSA9PiB7XG4gICAgICBjb25zdCBpc0NoZWNrZWQgPSByYWRpby52YWx1ZSA9PT0gdGhpcy5fdmFsdWU7XG4gICAgICByYWRpby5fdXBkYXRlQ2hlY2tlZChpc0NoZWNrZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRGlzYWJsZWQoKTogdm9pZCB7XG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW86IE1kYlJhZGlvRGlyZWN0aXZlKSA9PiByYWRpby5fdXBkYXRlRGlzYWJsZWRTdGF0ZSh0aGlzLl9kaXNhYmxlZCkpO1xuICB9XG5cbiAgLy8gQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl91cGRhdGVEaXNhYmxlZCgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=