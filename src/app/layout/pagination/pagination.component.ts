import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() current: number = 1;
  @Input() total: number = 0;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() previous: EventEmitter<void> = new EventEmitter<void>();

  public pages: number[] = [];

  ngOnInit(): void {
    this.updatePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue !== undefined) ||
      (changes['total'] && changes['total'].currentValue !== undefined)
    ) {
      this.updatePages();
    }
  }

  private updatePages(): void {
    this.pages = this.getPages(this.current, this.total);
  }

  private getPages(current: number, total: number): number[] {
    if (total <= 7) {
      return [...Array(total).keys()].map(x => ++x);
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total];
      } else {
        return [1, -1, current - 1, current, current + 1, -1, total];
      }
    }

    return [1, 2, 3, 4, 5, -1, total];
  }

  public onGoTo(page: number): void {
    this.goTo.emit(page);
  }

  public onNext(): void {
    this.next.emit();
  }

  public onPrevious(): void {
    this.previous.emit();
  }
}
