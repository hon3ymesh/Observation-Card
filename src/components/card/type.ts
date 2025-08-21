export type Badge = { label: string; title?: string };

export type ObservationCardProps = {
  title: string;
  author: string;
  date: string;
  description: string;
  badges: Badge[];
};