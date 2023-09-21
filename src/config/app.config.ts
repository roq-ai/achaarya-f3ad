interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: ['Guest'],
  tenantRoles: ['Teacher', 'Parent', 'Student'],
  tenantName: 'Provider',
  applicationName: 'Achaarya.',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View textbooks', 'View chapters', 'View questions', 'View study sessions'],
  ownerAbilities: ['Manage textbooks', 'Manage chapters', 'Manage questions', 'View study sessions'],
  getQuoteUrl: 'https://app.roq.ai/proposal/907fc5ef-a63b-4c6a-bce4-0035d355c4aa',
};
