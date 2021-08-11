export type SettingsType = {
  pomodoroTime: number;
  shortRestTime: number;
  status: string;
  currentTime: number | null,
  start: boolean
};

export type PropsSettingsType = {
  settings: SettingsType;
  update(settings: SettingsType): void;
};