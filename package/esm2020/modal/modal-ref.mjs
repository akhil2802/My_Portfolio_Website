import { Subject } from 'rxjs';
export class MdbModalRef {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L21vZGFsL21vZGFsLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQXNCLFdBQXVCLEVBQVUsVUFBc0M7UUFBdkUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUE0QjtRQUU1RSxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0MsWUFBTyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSCtCLENBQUM7SUFLakcsS0FBSyxDQUFDLE9BQWE7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV6QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsQ0FBQzthQUM3QztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZGJNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNZGJNb2RhbFJlZjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgcHJpdmF0ZSBfY29udGFpbmVyOiBNZGJNb2RhbENvbnRhaW5lckNvbXBvbmVudCkge31cblxuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2xvc2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICByZWFkb25seSBvbkNsb3NlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLm9uQ2xvc2UkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNsb3NlKG1lc3NhZ2U/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250YWluZXIuX2Nsb3NlKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIuX2NvbmZpZy5ub25JbnZhc2l2ZSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuX29uTm9uSW52YXNpdmVNb2RhbEhpZGRlbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyLl9yZXN0b3JlU2Nyb2xsYmFyKCk7XG4gICAgICB0aGlzLm9uQ2xvc2UkLm5leHQobWVzc2FnZSk7XG4gICAgICB0aGlzLm9uQ2xvc2UkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSwgdGhpcy5fY29udGFpbmVyLk1PREFMX1RSQU5TSVRJT04pO1xuICB9XG59XG4iXX0=