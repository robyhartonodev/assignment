# Empulse - Assignment Batch Image Processing / Delivery

# Aufgaben

Als User möchte ich auf einer Website ein oder mehrere Bilder hochladen, die im Backend in Graustufen abgespeichert werden. Meine Bilder werden unterschiedliche Größenformate, Dateitypen (PNG, JPEG) und Größen haben. Die hochgeladenen Bilder werden nicht gespeichert, sondern nur die verarbeiteten Bilder werden in einem in einem Order im Backend gespeichert. Ein Upload gehört zu einer Bestellung.

Die maximale Größe eines einzelnen Bildes sind 3 Megabyte. Der User bekommt eine Fehlermeldung, sollten diese Einschränkungen nicht eingehalten werden. Diese Einschränkung sollte beim Erstellen des Backends als auch des Frontends beachtet werden.

Ich möchte jede Bestellung mit einem Lieferdatum versehen. Dieses wird in der Zukunft liegen und auf einen Wochentag fallen. Falls dies nicht der Fall ist, möchte ich eine Fehlermeldung bekommen. Ich möchte jeden Upload mit einem Betreff, Kundennamen und E-Mail versehen. Diese Daten können mehrfach verwendet werden, solange das Lieferdatum ein anderes ist. Eine Bestellung beinhaltet Kundenname, Kunden Email, Bilder und Lieferdatum.

Ich möchte eine Meldung sehen, ob der Upload erfolgreich war.

Als User brauche ich eine weitere Ansicht, in der ich mir Vorgängen anschaue. Ich möchte zuerst die als nächstes fälligen Lieferungen sehen. Ich möchte jedes Lieferdatum in einer eigenen Reihe sehen, in der nebeneinander die fälligen Lieferungen samt Kundenname und Betreff angezeigt werden.

Ich möchte mir jede Lieferung einzeln anschauen können. In dieser Ansicht möchte ich einen Button haben, der mir eine Nachrichten generiert. Diese beinhaltet Informationen zur Lieferung. Dazu gehört wieviele Bilder verarbeitet wurden, welcher Kunde und welche E-Mail Adresse zum Vorgang gehört. Zusätzlich sollen alle Bilder des Vorgangs in eine ZIP Datei gepackt und über das Backend zur Verfügung gestellt werden. Der Link soll in dieser Nachricht angezeigt werden.

Als User möchte ich einzelne Lieferungen in der Einzel- sowie der Listenansicht löschen können.

## Optional

1. Ist eine der Dateien korrupt, möchte ich nach dem Upload eine Fehlermeldung sehen, in der mir der Dateiname der korrupten Datei angezeigt wird.
2. Bei gleichem Kundennamen, Email, Lieferdatum möchte ich meinen Upload dieser Lieferung hinzufügen und keine Fehlermeldung sehen.
3. Ich möchte in der Erfolgsmeldung nach dem Upload sehen, wieviele Bilder in der Lieferung drin sind
4. Die Bilder werden in eine passwortgeschützte ZIP Datei gepackt. Das Passwort sehe ich in der Nachricht, die für die Lieferung generiert wurde.
5. Lieferungen werden nicht direkt gelöscht. Sie sollen für einen Tag in der UI ausgegraut angezeigt werden und erst danach inklusive Dateien vollständig gelöscht werden.
6. In der Einzelansicht kann ich weitere Bilder in die Lieferung hochladen.
7. In der Einzelansicht kann ich das Lieferdatum ändern.

# How to run

1. Install docker and docker compose
2. Run `docker-compose up`
3. Open localhost:8080

# Preview

![alt text](https://raw.githubusercontent.com/robyhartonodev/assignment/master/preview/preview.png)