import { defaults } from "lodash-es"

export interface TimelineEvent {
    date: string | number,
    title: string,
    subtitle: string,
    body: string,
    points: string[],
    createdAt: Date
}

export const makeEvent = (data: Partial<TimelineEvent>): TimelineEvent => {
    return defaults(
        data,
        { date: 0, title: "", subtitle: "", body: "", points: [], createdAt: new Date() }
    );
}

export const makeEvents = (data: Partial<TimelineEvent>[]): TimelineEvent[] => {
    return data.map(makeEvent);
}
