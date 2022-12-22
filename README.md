# Zadanie

Utwórz komponent klasowy `Counter`, który będzie:

- ustawiał domyślny stan komponentu na następujący:

```
    this.state = { ticks: 0 };
```

- posiadał przycisk, który wywoła funkcję `incrementTicks`, która za każdym wywołaniem zwiększa właściwość ticks o `1`
- ustawiał tekst w przycisku zawsze równy wartości `this.state.ticks`
- blokował zwiększanie się wartości licznika w przycisku, jeśli `this.state.ticks` osiągnie `10`, przycisk powinien być zablokowany przy pomocy właściwości `disabled`
