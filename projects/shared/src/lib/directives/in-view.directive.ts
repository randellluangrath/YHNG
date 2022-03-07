import {
  Directive,
  Component,
  Input,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({ selector: '[inView]' })
export class InViewDirective implements AfterViewInit {
  @Output()
  inViewChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  alreadyRendered: boolean; // cheking if visible already

  constructor(
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) {}

  ngAfterViewInit() {
    const commentEl = this.vcRef.element.nativeElement; // template
    const elToObserve = commentEl.parentElement;
    this.setMinWidthHeight(elToObserve);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.renderContents(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.1, 0.9, 1] }
    );
    observer.observe(elToObserve);
  }

  renderContents(isInView) {
    if (isInView && !this.alreadyRendered) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.tplRef);
      this.alreadyRendered = true;
      this.inViewChanged.emit(true);
    }
  }

  setMinWidthHeight(el) {
    // prevent issue being visible all together
    const style = window.getComputedStyle(el);
    const [width, height] = [parseInt(style.width), parseInt(style.height)];
    !width && (el.style.minWidth = '40px');
    !height && (el.style.minHeight = '40px');
  }
}
