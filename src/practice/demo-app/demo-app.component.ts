import { Component, EffectRef, computed, effect, signal } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "demo-app",
  standalone: true,
  imports: [],
  templateUrl: "./demo-app.component.html",
  styleUrl: "./demo-app.component.css",
})
export class DemoAppComponent {
  // counter = signal(0);
  counter: number;

  derivedCounter = computed(() => {
    // const counter = this.counter();
    const counter = this.counterService.counter();
    return counter * 10;
  });

  // effectRef: EffectRef;

  constructor(private counterService: CounterService) {

    // this.effectRef = effect(
    //   (onCleanup) => {
    //     onCleanup(() => {
    //       console.log("cleanup occured");
    //     });

    //     const counterValue = this.counter();
    //     const derivedCounterValue = this.derivedCounter();

    //     console.log(counterValue, derivedCounterValue);
    //   },
    //   {
    //     manualCleanup: true,
    //   }
    // );
  }

  increment() {
    this.counterService.increment();
  }

  // onCleanup() {
  //   this.effectRef.destroy();
  // }
}
