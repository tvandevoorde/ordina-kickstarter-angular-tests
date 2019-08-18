import { Directive, Input, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarToggle]'
})
export class NavbarToggleDirective implements OnInit {
  @Input() appNavbarToggle: HTMLElement;
  @HostListener('click') onclick() {
    this.toggleNavBar();
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  private toggleNavBar(): void {
    const open: boolean = this.appNavbarToggle.classList.contains('show');
    if (open) {
      this.renderer.removeClass(this.appNavbarToggle, 'show');
    } else {
      this.renderer.addClass(this.appNavbarToggle, 'show');
    }
  }
}
