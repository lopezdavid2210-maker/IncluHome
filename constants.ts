import { Alert, Appointment, Employee, Message } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  { id: '1', name: 'Juan Pérez', role: 'Analista de Datos', disability: 'Motriz', area: 'Tecnología', timeInCompany: '2 años', psychologyAppointments: 3 },
  { id: '2', name: 'Maria Rodriguez', role: 'Diseñadora UX', disability: 'Auditiva', area: 'Marketing', timeInCompany: '1 año', psychologyAppointments: 1 },
  { id: '3', name: 'Carlos Lopez', role: 'Contador', disability: 'Visual', area: 'Finanzas', timeInCompany: '5 años', psychologyAppointments: 8 },
  { id: '4', name: 'Ana Garcia', role: 'Desarrolladora', disability: 'Neurodivergente', area: 'Tecnología', timeInCompany: '6 meses', psychologyAppointments: 2 },
];

export const MOCK_ALERTS: Alert[] = [
  { id: '1', employeeName: 'Carlos Lopez', employeeRole: 'Contador', disability: 'Visual', lastAlert: '2024-05-20', reason: 'Estrés elevado reportado', status: 'Pendiente' },
  { id: '2', employeeName: 'Ana Garcia', employeeRole: 'Desarrolladora', disability: 'Neurodivergente', lastAlert: '2024-05-18', reason: 'Fatiga recurrente', status: 'En Proceso' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', employeeName: 'Juan Pérez', employeeRole: 'Analista', modality: 'Virtual', date: '2024-06-10', time: '10:00 AM', psychologist: 'Dr. Sonia Ruiz', reason: 'Seguimiento mensual', status: 'Confirmada' },
  { id: '2', employeeName: 'Maria Rodriguez', employeeRole: 'Diseñadora', modality: 'Presencial', date: '2024-06-12', time: '02:00 PM', psychologist: 'Dr. Sonia Ruiz', reason: 'Adaptación puesto', status: 'Pendiente' },
];

export const MOCK_MESSAGES: Message[] = [
  { id: '1', sender: 'Juan Pérez', subject: 'Solicitud de cambio de horario', date: 'Hace 2 horas', read: false, content: 'Hola, quisiera solicitar un ajuste en mi horario debido a...' },
  { id: '2', sender: 'Área Médica', subject: 'Reporte de salud mensual', date: 'Ayer', read: true, content: 'Adjunto el reporte de salud general del equipo...' },
];
