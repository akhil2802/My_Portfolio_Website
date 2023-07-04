import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2 } from '@angular/core';
import { MdbScrollspyLinkDirective } from './scrollspy-link.directive';
import { MdbScrollspyService } from './scrollspy.service';
import { Subject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MdbScrollspyDirective implements OnInit, AfterContentInit, OnDestroy {
    private scrollSpyService;
    private _elementRef;
    private _renderer;
    links: QueryList<MdbScrollspyLinkDirective>;
    readonly _destroy$: Subject<void>;
    get id(): string;
    set id(newId: string);
    private _id;
    get collapsible(): boolean;
    set collapsible(value: boolean);
    private _collapsible;
    activeLinkChange: EventEmitter<any>;
    activeSub: Subscription;
    constructor(scrollSpyService: MdbScrollspyService, _elementRef: ElementRef, _renderer: Renderer2);
    get host(): HTMLElement;
    collapsibleElementHeight: number;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private styleCollapsibleElement;
    private getAllSiblings;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbScrollspyDirective, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdbScrollspyDirective, "[mdbScrollspy]", never, { "id": "mdbScrollspy"; "collapsible": "collapsible"; }, { "activeLinkChange": "activeLinkChange"; }, ["links"], ["*"], false, never>;
}