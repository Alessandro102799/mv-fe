/**
 * Jsend dto
 */
export interface JSend<T> {
    status: string;
    code: number;
    data: T;
  }
  