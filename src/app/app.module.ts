import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatFormFieldModule,
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UnitConversionComponent} from './components/unitconversion/unitconversion.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, UnitConversionComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        MatChipsModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        NgxMaskModule.forRoot(),
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {floatLabel: 'always'},
        },
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
