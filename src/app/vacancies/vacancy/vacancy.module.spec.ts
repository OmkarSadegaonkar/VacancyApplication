import { VacancyModule } from './vacancy.module';

describe('VacancyModule', () => {
  let vacancyModule: VacancyModule;

  beforeEach(() => {
    vacancyModule = new VacancyModule();
  });

  it('should create an instance', () => {
    expect(vacancyModule).toBeTruthy();
  });
});
