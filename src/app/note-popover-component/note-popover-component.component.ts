import {
  ApplicationRef,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef, Inject, Injector, NgZone,
  OnDestroy,
  OnInit, Renderer2, ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {NgbModal, NgbPopover, NgbPopoverConfig} from "@ng-bootstrap/ng-bootstrap";
import {DOCUMENT} from "@angular/common";
import {from} from "rxjs";
import {UtilComponent} from "../modal/util/util.component";

@Component({
  selector: '[popover-component]',
  templateUrl: './note-popover-component.component.html',
  styleUrls: ['./note-popover-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotePopoverComponentComponent extends NgbPopover implements OnInit, OnDestroy {


  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2, injector: Injector, viewContainerRef: ViewContainerRef,
              config: NgbPopoverConfig, ngZone: NgZone, @Inject(DOCUMENT) private document: any, changeDetector: ChangeDetectorRef, applicationRef: ApplicationRef,
              private ngbModal: NgbModal) {
    super(elementRef, renderer, injector, viewContainerRef, config, ngZone, document, changeDetector, applicationRef);
  }

  private unlisten: any;

  override ngOnInit(): void {
    super.ngOnInit();
    this.unlisten = this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
      event.stopPropagation();
      if (this.isOpen()) {
        return;
      }
      console.log(event);
      // from(this.ngbModal.open(UtilComponent).result).subscribe(() => {});
      this.open({popover: this, title: 'hello', content: 'world'});
    });
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    if (this.unlisten) {
      this.unlisten();
    }
  }

}
