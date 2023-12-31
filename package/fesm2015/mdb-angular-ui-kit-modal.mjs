import { Subject, fromEvent } from 'rxjs';
import * as i3 from '@angular/cdk/portal';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Inject, ViewChild, HostBinding, HostListener, TemplateRef, Injector, Injectable, NgModule } from '@angular/core';
import { filter, takeUntil, take } from 'rxjs/operators';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i1 from '@angular/cdk/a11y';
import * as i1$1 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';

/* eslint-disable @typescript-eslint/no-inferrable-types */
class MdbModalConfig {
    constructor() {
        this.animation = true;
        this.backdrop = true;
        this.ignoreBackdropClick = false;
        this.keyboard = true;
        this.modalClass = '';
        this.containerClass = '';
        this.data = null;
        this.nonInvasive = false;
    }
}

class MdbModalRef {
    constructor(_overlayRef, _container) {
        this._overlayRef = _overlayRef;
        this._container = _container;
        this.onClose$ = new Subject();
        this.onClose = this.onClose$.asObservable();
    }
    close(message) {
        this._container._close();
        setTimeout(() => {
            if (this._container._config.nonInvasive) {
                this._container._onNonInvasiveModalHidden();
            }
            this._container._restoreScrollbar();
            this.onClose$.next(message);
            this.onClose$.complete();
            this._overlayRef.detach();
            this._overlayRef.dispose();
        }, this._container.MODAL_TRANSITION);
    }
}

// width below which, according to css rules, modal position changes - modal gets position relative instead of absolute.
const MODAL_CSS_BREAKPOINT = 992;
const MODAL_OPEN_CLASS = 'modal-open';
const NON_INVASIVE_CLASS = 'modal-non-invasive-open';
const NON_INVASIVE_SHOW_CLASS = 'modal-non-invasive-show';
class MdbModalContainerComponent {
    constructor(_document, _elementRef, _renderer, _focusTrapFactory, _ngZone) {
        this._document = _document;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._focusTrapFactory = _focusTrapFactory;
        this._ngZone = _ngZone;
        this._destroy$ = new Subject();
        this.backdropClick$ = new Subject();
        this.BACKDROP_TRANSITION = 150;
        this.MODAL_TRANSITION = 200;
        this.NON_INVASIVE_TRANSITION = 450;
        this.modal = true;
        this._isScrollable = false;
        this._isBottomRight = false;
        this._isBottomLeft = false;
        this._isTopRight = false;
        this._isTopLeft = false;
        this._isSideTopModal = false;
        this._isSideBottomModal = false;
        this._isSideModal = false;
        this._isModalBottom = false;
        this._topOffset = 0;
        this._leftOffset = 0;
        this._rightOffset = 0;
        this._bottomOffset = 0;
    }
    get hasAnimation() {
        return this._config.animation;
    }
    onWindowResize() {
        this._ngZone.runOutsideAngular(() => {
            if (this._config.nonInvasive) {
                this._handleWindowResize();
            }
        });
    }
    get host() {
        return this._elementRef.nativeElement;
    }
    ngOnInit() {
        var _a;
        this._updateContainerClass();
        this._renderer.setStyle(this.host, 'display', 'block');
        if (!this._config.nonInvasive) {
            this._focusTrap = this._focusTrapFactory.create(this.host);
            this._previouslyFocusedElement = this._document.activeElement;
        }
        if (this._config.animation) {
            setTimeout(() => {
                this._renderer.addClass(this.host, 'show');
                setTimeout(() => {
                    var _a;
                    (_a = this._focusTrap) === null || _a === void 0 ? void 0 : _a.focusInitialElementWhenReady();
                }, this.MODAL_TRANSITION);
            }, this.BACKDROP_TRANSITION);
        }
        else {
            (_a = this._focusTrap) === null || _a === void 0 ? void 0 : _a.focusInitialElementWhenReady();
        }
    }
    ngAfterViewInit() {
        const widthWithVerticalScroll = this._document.body.offsetWidth;
        this._renderer.addClass(this._document.body, MODAL_OPEN_CLASS);
        if (this._config.nonInvasive) {
            this._renderer.addClass(this._document.body, NON_INVASIVE_CLASS);
            setTimeout(() => {
                this._onNonInvasiveModalShown();
            }, this.NON_INVASIVE_TRANSITION);
        }
        if (!this._config.nonInvasive) {
            this._renderer.setStyle(this._document.body, 'overflow', 'hidden');
        }
        const widthWithoutVerticalScroll = this._document.body.offsetWidth;
        if (!this._config.nonInvasive) {
            this._renderer.setStyle(this._document.body, 'padding-right', `${widthWithoutVerticalScroll - widthWithVerticalScroll}px`);
        }
        if (!this._config.ignoreBackdropClick && !this._config.nonInvasive) {
            fromEvent(this.host, 'mousedown')
                .pipe(filter((event) => {
                const target = event.target;
                const dialog = this.modalDialog.nativeElement;
                const notDialog = target !== dialog;
                const notDialogContent = !dialog.contains(target);
                return notDialog && notDialogContent;
            }), takeUntil(this._destroy$))
                .subscribe((event) => {
                this.backdropClick$.next(event);
            });
        }
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this._previouslyFocusedElement) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = this._focusTrap) === null || _b === void 0 ? void 0 : _b.destroy();
        this._destroy$.next();
        this._destroy$.complete();
    }
    _updateContainerClass() {
        if (this._config.containerClass === '' ||
            (this._config.containerClass.length && this._config.containerClass.length === 0)) {
            return;
        }
        const containerClasses = this._config.containerClass.split(' ');
        containerClasses.forEach((containerClass) => {
            this._renderer.addClass(this.host, containerClass);
        });
    }
    _onNonInvasiveModalShown() {
        this._isScrollable = this._config.modalClass.includes('modal-dialog-scrollable');
        this._isBottomRight = this._config.modalClass.includes('modal-bottom-right');
        this._isBottomLeft = this._config.modalClass.includes('modal-bottom-left');
        this._isTopRight = this._config.modalClass.includes('modal-top-right');
        this._isTopLeft = this._config.modalClass.includes('modal-top-left');
        this._isModalBottom = this._config.modalClass.includes('modal-bottom');
        this._isSideTopModal = this._isTopLeft || this._isTopRight;
        this._isSideBottomModal = this._isBottomLeft || this._isBottomRight;
        this._isSideModal = this._isSideTopModal || this._isSideBottomModal;
        this._modalContentRect = this.modalContent.nativeElement.getBoundingClientRect();
        this._modalContentComputedStyles = window.getComputedStyle(this.modalContent.nativeElement);
        this._modalDialogComputedStyles = window.getComputedStyle(this.modalDialog.nativeElement);
        this._topOffset = parseInt(this._modalDialogComputedStyles.top, 0);
        this._leftOffset = parseInt(this._modalDialogComputedStyles.left, 0);
        this._rightOffset = parseInt(this._modalDialogComputedStyles.right, 0);
        this._bottomOffset = parseInt(this._modalDialogComputedStyles.bottom, 0);
        this._renderer.addClass(this.host, NON_INVASIVE_SHOW_CLASS);
        this._setNonInvasiveStyles();
    }
    _setNonInvasiveStyles(leftOffset = 0, topOffset = 0) {
        const isAboveBreakpoint = window.innerWidth >= MODAL_CSS_BREAKPOINT;
        this._renderer.setStyle(this.host, 'left', `${this._modalContentRect.left + leftOffset}px`);
        this._renderer.setStyle(this.host, 'width', this._modalContentComputedStyles.width);
        if (!this._isScrollable) {
            // If the modal content is not long enough to require scroll shrink the modal wrapper to
            // the height of modal content so other elements on site are clickable outside modal
            this._renderer.setStyle(this.host, 'height', this._modalContentComputedStyles.height);
            this._renderer.setStyle(this.host, 'display', '');
        }
        if (isAboveBreakpoint) {
            if (this._isSideBottomModal || this._isModalBottom) {
                // Force modal to correct bottom placement. It's needed because modal host has position
                // fixed and fixed height.
                this._renderer.setStyle(this.host, 'top', `${this._modalContentRect.top + topOffset}px`);
            }
            if (this._isSideModal) {
                // Enable horizontal scrolling when the content is wider than the modal's fixed width
                this._renderer.setStyle(this.host, 'overflowX', 'auto');
            }
        }
    }
    _onNonInvasiveModalHidden() {
        this._renderer.removeClass(this.host, NON_INVASIVE_SHOW_CLASS);
        this._resetNonInvasiveStyles();
        this._removeNonInvasiveClass();
    }
    _resetNonInvasiveStyles() {
        this._renderer.setStyle(this.host, 'left', '');
        this._renderer.setStyle(this.host, 'top', '');
        this._renderer.setStyle(this.host, 'height', '');
        this._renderer.setStyle(this.host, 'width', '');
        if (!this._isScrollable) {
            this._renderer.setStyle(this.host, 'display', '');
        }
        if (this._isSideModal) {
            this._renderer.setStyle(this.host, 'overflowX', '');
        }
    }
    _removeNonInvasiveClass() {
        const isOtherModalOpen = this._document.body.querySelector('.modal.show.modal-non-invasive-show');
        if (!isOtherModalOpen) {
            this._renderer.removeClass(this._document.body, NON_INVASIVE_CLASS);
        }
        else {
            this._renderer.addClass(this._document.body, MODAL_OPEN_CLASS);
        }
    }
    _handleWindowResize() {
        const modalContent = this.host.querySelector('.modal-content');
        this._resetNonInvasiveStyles();
        this._modalContentRect = modalContent.getBoundingClientRect();
        this._modalContentComputedStyles = window.getComputedStyle(modalContent);
        if (this._isSideTopModal || this._isSideBottomModal) {
            let sideOffset = 0;
            let topOffset = 0;
            if (this._isBottomRight || this._isBottomLeft) {
                topOffset = -this._bottomOffset;
            }
            if (this._isBottomRight || this._isTopRight) {
                sideOffset = -this._rightOffset;
            }
            if (this._isBottomLeft || this._isTopLeft) {
                sideOffset = this._leftOffset;
            }
            this._setNonInvasiveStyles(sideOffset, topOffset);
        }
        else {
            this._setNonInvasiveStyles();
        }
    }
    _close() {
        if (this._config.animation) {
            this._renderer.removeClass(this.host, 'show');
        }
        // Pause iframe/video when closing modal
        const iframeElements = Array.from(this.host.querySelectorAll('iframe'));
        const videoElements = Array.from(this.host.querySelectorAll('video'));
        iframeElements.forEach((iframe) => {
            const srcAttribute = iframe.getAttribute('src');
            this._renderer.setAttribute(iframe, 'src', srcAttribute);
        });
        videoElements.forEach((video) => {
            video.pause();
        });
    }
    _restoreScrollbar() {
        this._renderer.removeClass(this._document.body, MODAL_OPEN_CLASS);
        this._renderer.removeStyle(this._document.body, 'overflow');
        this._renderer.removeStyle(this._document.body, 'padding-right');
    }
    attachComponentPortal(portal) {
        return this._portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        return this._portalOutlet.attachTemplatePortal(portal);
    }
}
MdbModalContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalContainerComponent, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ConfigurableFocusTrapFactory }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MdbModalContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: MdbModalContainerComponent, selector: "mdb-modal-container", host: { listeners: { "window:resize": "onWindowResize($event)" }, properties: { "class.modal": "this.modal", "class.fade": "this.hasAnimation" } }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }, { propertyName: "modalDialog", first: true, predicate: ["dialog"], descendants: true, static: true }, { propertyName: "modalContent", first: true, predicate: ["content"], descendants: true, static: true }], ngImport: i0, template: "<div #dialog [class]=\"'modal-dialog' + (_config.modalClass ? ' ' + _config.modalClass : '')\">\n  <div\n    #content\n    class=\"modal-content\"\n    [ngClass]=\"{ 'rounded-0': _config.modalClass.includes('modal-frame') }\"\n  >\n    <ng-template cdkPortalOutlet></ng-template>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.Default });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mdb-modal-container', changeDetection: ChangeDetectionStrategy.Default, template: "<div #dialog [class]=\"'modal-dialog' + (_config.modalClass ? ' ' + _config.modalClass : '')\">\n  <div\n    #content\n    class=\"modal-content\"\n    [ngClass]=\"{ 'rounded-0': _config.modalClass.includes('modal-frame') }\"\n  >\n    <ng-template cdkPortalOutlet></ng-template>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ConfigurableFocusTrapFactory }, { type: i0.NgZone }];
    }, propDecorators: { _portalOutlet: [{
                type: ViewChild,
                args: [CdkPortalOutlet, { static: true }]
            }], modalDialog: [{
                type: ViewChild,
                args: ['dialog', { static: true }]
            }], modalContent: [{
                type: ViewChild,
                args: ['content', { static: true }]
            }], modal: [{
                type: HostBinding,
                args: ['class.modal']
            }], hasAnimation: [{
                type: HostBinding,
                args: ['class.fade']
            }], onWindowResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class MdbModalService {
    constructor(_document, _overlay, _injector, _cfr) {
        this._document = _document;
        this._overlay = _overlay;
        this._injector = _injector;
        this._cfr = _cfr;
    }
    open(componentOrTemplateRef, config) {
        const defaultConfig = new MdbModalConfig();
        config = config ? Object.assign(defaultConfig, config) : defaultConfig;
        const overlayRef = this._createOverlay(config);
        const container = this._createContainer(overlayRef, config);
        const modalRef = this._createContent(componentOrTemplateRef, container, overlayRef, config);
        this._registerListeners(modalRef, config, container);
        return modalRef;
    }
    _createOverlay(config) {
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    _getOverlayConfig(modalConfig) {
        const config = new OverlayConfig({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: this._overlay.scrollStrategies.noop(),
            hasBackdrop: modalConfig.nonInvasive ? false : modalConfig.backdrop,
            backdropClass: 'mdb-backdrop',
        });
        return config;
    }
    _createContainer(overlayRef, config) {
        const portal = new ComponentPortal(MdbModalContainerComponent, null, this._injector, this._cfr);
        const containerRef = overlayRef.attach(portal);
        containerRef.instance._config = config;
        return containerRef.instance;
    }
    _createContent(componentOrTemplate, container, overlayRef, config) {
        const modalRef = new MdbModalRef(overlayRef, container);
        if (componentOrTemplate instanceof TemplateRef) {
            container.attachTemplatePortal(new TemplatePortal(componentOrTemplate, null, {
                $implicit: config.data,
                modalRef,
            }));
        }
        else {
            const injector = this._createInjector(config, modalRef, container);
            const contentRef = container.attachComponentPortal(new ComponentPortal(componentOrTemplate, config.viewContainerRef, injector));
            if (config.data) {
                Object.assign(contentRef.instance, Object.assign({}, config.data));
            }
        }
        return modalRef;
    }
    _createInjector(config, modalRef, container) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The dialog container should be provided as the dialog container and the dialog's
        // content are created out of the same `ViewContainerRef` and as such, are siblings
        // for injector purposes. To allow the hierarchy that is expected, the dialog
        // container is explicitly provided in the injector.
        const providers = [
            { provide: MdbModalContainerComponent, useValue: container },
            { provide: MdbModalRef, useValue: modalRef },
        ];
        return Injector.create({ parent: userInjector || this._injector, providers });
    }
    _registerListeners(modalRef, config, container) {
        container.backdropClick$.pipe(take(1)).subscribe(() => {
            modalRef.close();
        });
        if (config.keyboard) {
            fromEvent(container._elementRef.nativeElement, 'keydown')
                .pipe(filter((event) => {
                return event.key === 'Escape';
            }), take(1))
                .subscribe(() => {
                modalRef.close();
            });
        }
    }
}
MdbModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalService, deps: [{ token: DOCUMENT }, { token: i1$1.Overlay }, { token: i0.Injector }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Injectable });
MdbModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: i1$1.Overlay }, { type: i0.Injector }, { type: i0.ComponentFactoryResolver }];
    } });

class MdbModalModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { MdbModalConfig, MdbModalContainerComponent, MdbModalModule, MdbModalRef, MdbModalService };
//# sourceMappingURL=mdb-angular-ui-kit-modal.mjs.map
//# sourceMappingURL=mdb-angular-ui-kit-modal.mjs.map
