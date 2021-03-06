import { ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
import { NavParams, ViewController, Content, InfiniteScroll } from 'ionic-angular';
import { CalendarDay, CalendarMonth, CalendarOptions, CalendarControllerOptions } from '../calendar.model';
import { CalendarService } from "../services/calendar.service";
export declare class CalendarComponent {
    private _renderer;
    _elementRef: ElementRef;
    params: NavParams;
    viewCtrl: ViewController;
    ref: ChangeDetectorRef;
    calSvc: CalendarService;
    content: Content;
    monthsEle: ElementRef;
    title: string;
    closeLabel: string;
    dayTemp: Array<CalendarDay | null>;
    calendarMonths: Array<CalendarMonth>;
    monthTitleFilterStr: string;
    weekdaysTitle: Array<string>;
    defaultDate: Date;
    scrollBackwards: boolean;
    weekStartDay: number;
    isSaveHistory: boolean;
    countNextMonths: number;
    showYearPicker: boolean;
    year: number;
    years: Array<number>;
    infiniteScroll: InfiniteScroll;
    closeIcon: boolean;
    options: CalendarOptions;
    debug: boolean;
    _s: boolean;
    _id: string;
    _color: string;
    _d: CalendarControllerOptions;
    constructor(_renderer: Renderer, _elementRef: ElementRef, params: NavParams, viewCtrl: ViewController, ref: ChangeDetectorRef, calSvc: CalendarService);
    ionViewDidLoad(): void;
    init(): void;
    findCssClass(): void;
    onChange(data: any): void;
    onCancel(): void;
    done(): void;
    canDone(): boolean;
    getHistory(): void;
    createYearPicker(startTime: number, endTime: number): void;
    nextMonth(infiniteScroll: InfiniteScroll): void;
    backwardsMonth(): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    findInitMonthNumber(date: Date): number;
    changedYearSelection(): void;
}
