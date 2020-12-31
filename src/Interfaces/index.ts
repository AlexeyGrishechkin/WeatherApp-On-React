export interface IDay {
  temp: number;
  feels_like: number;
  description: string;
  icon: string;
  id: number;
  main: string;
  windSpeed: number;
  windDeg: number;
  sunrise: number;
  sunset: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  clouds: number;
  visibility: number | null;
}

export interface IDays {
  days: Array<IDay> | any;
}

export interface IChooseRegion {
  setCity(city: string): void;
}

export interface IDayFull {
  fullData: {
    temp: number;
    feels_like: number;
    description: string;
    icon: string;
    main: string;
    windSpeed: number;
    windDeg: number;
    sunrise: number;
    sunset: number;
    pressure: number;
    humidity: number;
    dewPoint: number;
    clouds: number;
    visibility: number | null;
  };
}
