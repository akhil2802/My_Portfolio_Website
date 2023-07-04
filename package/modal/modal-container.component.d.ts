import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ComponentRef, ElementRef, EmbeddedViewRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MdbModalConfig } from './modal-config';
import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MdbModalContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    private _document;
    _elementRef: ElementRef;
    private _renderer;
    private _focusTrapFactory;
    private _ngZone;
    _portalOutlet: CdkPortalOutlet;
    modalDialog: ElementRef;
    modalContent: ElementRef;
    readonly _destroy$: Subject<void>;
    readonly backdropClick$: Subject<MouseEvent>;
    _config: MdbModalConfig;
    BACKDROP_TRANSITION: number;
    MODAL_TRANSITION: number;
    NON_INVASIVE_TRANSITION: number;
    private _previouslyFocusedElement;
    private _focusTrap;
    modal: boolean;
    get hasAnimation(): boolean;
    onWindowResize(): void;
    get host(): HTMLElement;
    private _isScrollable;
    private _isBottomRight;
    private _isBottomLeft;
    private _isTopRight;
    private _isTopLeft;
    private _isSideTopModal;
    private _isSideBottomModal;
    private _isSideModal;
    private _isModalBottom;
    private _modalContentRect;
    private _modalContentComputedStyles;
    private _modalDialogComputedStyles;
    private _topOffset;
    private _leftOffset;
    private _rightOffset;
    private _bottomOffset;
    constructor(_document: any, _elementRef: ElementRef, _renderer: Renderer2, _focusTrapFactory: ConfigurableFocusTrapFactory, _ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _updateContainerClass;
    private _onNonInvasiveModalShown;
    private _setNonInvasiveStyles;
    _onNonInvasiveModalHidden(): void;
    private _resetNonInvasiveStyles;
    private _removeNonInvasiveClass;
    private _handleWindowResize;
    _close(): void;
    _restoreScrollbar(): void;
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbModalContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdbModalContainerComponent, "mdb-modal-container", never, {}, {}, never, never, false, never>;
}