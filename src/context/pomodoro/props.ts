export type SettingsType = {
  pomodoroTime: number;
  shortRestTime: number;
  status: string;
  active: boolean
};

export type PropsSettingsType = {
  settings: SettingsType;
  update(settings: SettingsType): void; 
  start(settings: SettingsType): void;
  stop(settings: SettingsType): void;
};