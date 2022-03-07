export class FieldOption<T> {
  label: string;
  value: T;
  icon: string;
  constructor(label: string, value: T, icon = null) {
    this.label = label;
    this.value = value;
    this.icon = icon;
  }
}

export class ComplexFieldOption extends FieldOption<string> {
  constructor(label: string, value: string) {
    super(label, value);
  }
}

export class AutoCompleteFieldOption extends FieldOption<string> {
  constructor(label: string, value: string, public secondaryLabel: string) {
    super(label, value);
  }
}
