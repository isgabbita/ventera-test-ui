import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UnitConversionService } from './unitConversion.service';
import { ConversionData } from 'src/app/interfaces/conversion-data';
import {ConversionResponse} from 'src/app/interfaces/conversion-response';

/** Error when invalid control is dirty, touched, or submitted. */
export class RegErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-unitconversion',
  templateUrl: './unitconversion.component.html',
  styleUrls: ['./unitconversion.component.scss'],
})
export class UnitConversionComponent implements OnInit {
  title = 'unit-conversion-ui';
  message = '';
  conversionForm: FormGroup;
  matcher = new RegErrorStateMatcher();
  conversionData: ConversionData;
  selectable: true;
  removable: true;
  errorMessages = [];
  constructor(
      private formBuilder: FormBuilder,
      private unitConversionService: UnitConversionService
  ) {}
  ngOnInit() {
    this.conversionForm = this.formBuilder.group(
        {
          input: ['', [Validators.required, inputValidator]],
          inputUOM: ['', [Validators.required, inputUOMValidator]],
          targetUOM: ['', [Validators.required, targetUOMValidator]],
          studentResponse: ['', [Validators.required, studentResponseValidator]],
        }
    );
  }
  remove(error: string): void {
    const index = this.errorMessages.indexOf(error);

    if (index >= 0) {
      this.errorMessages.splice(index, 1);
    }
  }
  onSubmit = () => {
    this.unitConversionService
        .checkConversion(this.conversionForm.value)
        .subscribe((apiResponse: ConversionResponse) => {
              this.message = apiResponse.response;
            },
            err => {
              this.message = err.statusText;
            });
  }
}

const inputValidator = Validators.pattern('^[0-9 \.]{1,}$');

const inputUOMValidator = Validators.pattern('^[a-zA-Z-]{1,}$');

const targetUOMValidator = Validators.pattern('^[a-zA-Z-]{1,}$');

const studentResponseValidator = Validators.pattern('^[0-9 \.]{1,}');
