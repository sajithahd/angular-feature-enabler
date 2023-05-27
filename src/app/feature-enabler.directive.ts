import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Feature, FeatureEnablerService } from './feature-enabler.service';

@Directive({
  selector: '[featureEnabler]'
})
export class FeatureEnablerDirective implements OnInit {

  @Input() featureEnabler!: Feature;

  constructor(private element: ElementRef,
              private featureEnablerService: FeatureEnablerService) {
  }

  ngOnInit(): void {
    this.featureEnablerService.isEligibleFeature$(this.featureEnabler).subscribe(
      isEnabled => {
        if (this.element?.nativeElement && !isEnabled) {
          this.element.nativeElement.style.display = 'none';
        }
      });
  }
}