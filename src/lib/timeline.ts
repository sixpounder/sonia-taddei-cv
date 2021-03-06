import { defaults } from "lodash-es"

export interface TimelineEvent {
    date: string | number | undefined,
    title: string,
    subtitle: string,
    body: string,
    points: { title: string | null, body: string }[],
    link: { label: string, href: string } | null,
    createdAt: Date
}

export const makeEvent = (data: Partial<TimelineEvent>): TimelineEvent => {
    return defaults(
        data,
        { date: 0, title: "", subtitle: "", body: "", points: [], link: null, createdAt: new Date() }
    );
}

export const makeEvents = (data: Partial<TimelineEvent>[]): TimelineEvent[] => {
    return data.map(makeEvent);
}
