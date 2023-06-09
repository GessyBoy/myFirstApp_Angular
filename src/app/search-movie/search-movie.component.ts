import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      titleIdentifier: this.formBuilder.group({
        title: ['', Validators.required],
        identifier: ['', Validators.required]
      }),
      type: ['series'],
      releaseYear: ['', [Validators.required, this.rangeDateValidator(1900, new Date().getFullYear())]],
      profile: this.formBuilder.control('courte')
    });
  }

  isRequiredValidator(group: FormGroup) {
    const titleControl = group.get('title');
    const identifierControl = group.get('identifier');

    const title = titleControl ? titleControl.value : '';
    const identifier = identifierControl ? identifierControl.value : '';

    if (!title && !identifier) {
      return { isRequired: true };
    }

    return null;
  }

  rangeDateValidator(minYear: number, maxYear: number) {
    return (control: any) => {
      const year = control.value;
      if (year < minYear || year > maxYear) {
        return { min: { minYear, maxYear } };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }

  isReleaseYearRequiredError(): boolean {
    return this.searchForm.get('releaseYear')?.errors?.['required'];
  }

  isReleaseYearMinError(): boolean {
    return this.searchForm.get('releaseYear')?.errors?.['min'];
  }

  getReleaseYearMin(): number {
    return this.searchForm.get('releaseYear')?.errors?.['min']?.minYear;
  }

  getReleaseYearMax(): number {
    return this.searchForm.get('releaseYear')?.errors?.['min']?.maxYear;
  }
}
