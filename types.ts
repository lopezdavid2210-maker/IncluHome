export enum Role {
  RH = 'Recursos Humanos',
  SST = 'Seguridad y Salud en el Trabajo',
  ADMIN = 'Administrador'
}

export interface User {
  name: string;
  email: string;
  role: Role;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  disability: string;
  area: string;
  timeInCompany: string;
  psychologyAppointments: number;
}

export interface Alert {
  id: string;
  employeeName: string;
  employeeRole: string;
  disability: string;
  lastAlert: string;
  reason: string;
  status: 'Atendido' | 'Pendiente' | 'En Proceso';
}

export interface Appointment {
  id: string;
  employeeName: string;
  employeeRole: string;
  modality: 'Presencial' | 'Virtual';
  date: string;
  time: string;
  psychologist: string;
  reason: string;
  status: 'Confirmada' | 'Pendiente' | 'Cancelada';
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  date: string;
  read: boolean;
  content: string;
}
