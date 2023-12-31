import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MdbRippleDirective {
    private _elementRef;
    private _renderer;
    get rippleCentered(): boolean;
    set rippleCentered(value: boolean);
    private _rippleCentered;
    rippleColor: string;
    rippleDuration: string;
    rippleRadius: number;
    get rippleUnbound(): boolean;
    set rippleUnbound(value: boolean);
    private _rippleUnbound;
    private _rippleInSpan;
    private _rippleTimer;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    get host(): HTMLElement;
    ripple: boolean;
    _createRipple(event: any): void;
    private _createWrapperSpan;
    _removeWrapperSpan(): void;
    private _createHTMLRipple;
    private _removeHTMLRipple;
    _appendRipple(target: HTMLElement, parent: HTMLElement): void;
    _toggleUnbound(target: HTMLElement): void;
    _addColor(target: HTMLElement, parent: HTMLElement): void;
    _removeOldColorClasses(target: HTMLElement): void;
    static ngAcceptInputType_rippleCentered: BooleanInput;
    static ngAcceptInputType_rippleUnbound: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbRippleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MdbRippleDirective, "[mdbRipple]", ["mdbRipple"], { "rippleCentered": "rippleCentered"; "rippleColor": "rippleColor"; "rippleDuration": "rippleDuration"; "rippleRadius": "rippleRadius"; "rippleUnbound": "rippleUnbound"; }, {}, never, never, false, never>;
}
