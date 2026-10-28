const APPLICATIONS_KEY = 'hawcoders_student_applications_v1';
const RSVPS_KEY = 'hawcoders_infosession_rsvps_v1';

export const getSavedApplications = () => {
  try {
    const data = localStorage.getItem(APPLICATIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to read applications from localStorage', e);
    return [];
  }
};

export const saveApplication = (appData) => {
  const existing = getSavedApplications();
  const newApp = {
    ...appData,
    id: 'HC-' + Math.floor(100000 + Math.random() * 900000),
    submittedAt: new Date().toISOString()
  };
  const updated = [newApp, ...existing];
  try {
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
  return newApp;
};

export const getSavedRSVPs = () => {
  try {
    const data = localStorage.getItem(RSVPS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to read RSVPs from localStorage', e);
    return [];
  }
};

export const saveRSVP = (rsvpData) => {
  const existing = getSavedRSVPs();
  const newRSVP = {
    ...rsvpData,
    id: 'RSVP-' + Math.floor(10000 + Math.random() * 90000),
    submittedAt: new Date().toISOString()
  };
  const updated = [newRSVP, ...existing];
  try {
    localStorage.setItem(RSVPS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save RSVP', e);
  }
  return newRSVP;
};

export const exportToCSV = (data, filename = 'hawcoders_data.csv') => {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const csvRows = [];
  csvRows.push(headers.join(','));
  for (const row of data) {
    const values = headers.map(header => {
      const val = row[header] ?? '';
      const escaped = ('' + val).replace(/"/g, '""');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  }
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
