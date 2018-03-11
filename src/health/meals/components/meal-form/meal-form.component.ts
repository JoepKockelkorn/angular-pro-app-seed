import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  styleUrls: ['meal-form.component.scss'],
  templateUrl: 'meal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input()
  meal: Meal;

  @Output()
  create = new EventEmitter<Meal>();

  @Output()
  update = new EventEmitter<Meal>();

  @Output()
  remove = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.name) {
      this.exists = true;
      const value = this.meal;
      this.form.patchValue(value);

      this.emptyIngredients();

      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get nameHasError() {
    const name = this.form.get('name');
    return name.invalid && name.touched;
  }

  emptyIngredients() {
    while(this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }

  createMeal() {
    if (this.form.invalid) return;
    this.create.emit(this.form.value);
  }

  updateMeal() {
    if (this.form.invalid) return;
    this.update.emit(this.form.value);
  }

  removeMeal() {
    this.remove.emit(this.form.value);
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
