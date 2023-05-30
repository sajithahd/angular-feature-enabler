import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {
  Feature,
  FeatureEnablerService,
  Visibility,
} from './feature-enabler.service';

@Directive({
  selector: '[featureEnabler]',
})
export class FeatureEnablerDirective implements OnInit {
  @Input() featureEnabler!: Feature;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private featureEnablerService: FeatureEnablerService
  ) {}

  ngOnInit(): void {
    this.featureEnablerService
      .isEligibleFeature$(this.featureEnabler)
      .subscribe((isEnabled) => {
        if (this.element?.nativeElement && !isEnabled[0]) {
          if (isEnabled[1] === Visibility.Hide) {
            this.element.nativeElement.style.display = 'none';
          } else if (isEnabled[1] === Visibility.Disable) {
            this.renderer.setProperty(
              this.element.nativeElement,
              'disabled',
              true
            );
          }
        }
      });
  }
}
