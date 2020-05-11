import JnDialogComponent from './JnDialogComponent';
class JnDialogModule {
    constructor() {
        this.jnDialogComp = null
    }
    mountVueComponent() {
        let el = document.createElement("div");
        el.id = "jnDialogCtn";
        document.getElementsByTagName("body")[0].appendChild(el);

        let offDocumentJnDialogComp = Vue.component(JnDialogComponent.name, JnDialogComponent);
        this.jnDialogComp = new offDocumentJnDialogComp().$mount();

        document.getElementById("jnDialogCtn").appendChild(this.jnDialogComp.$el);
    }
    confirm(options) {
        if (!document.getElementById("jnDialogCtn")) {
            this.mountVueComponent();
        }

        let defaultOptions = {
            modalTitle: "Vennligst bekreft ditt valg",
            modalBody: "Du må bekrefte handlingen for å kunne fortsette.",
            rejectButton: {
                visible: true,
                text: "Avbryt"
            },
            resolveButton: {
                visible: true,
                text: "Bekreft"
            }
        };

        this.jnDialogComp.setOptions({ ...defaultOptions, ...options });
        this.jnDialogComp.showModal(true);

        return new Promise((resolve, reject) => {
            this.jnDialogComp.$on("resolveModal", () => {
                resolve("jn dialog modal resolved");
            });

            this.jnDialogComp.$on("rejectModal", () => {
                reject("jn dialog modal rejected");
            });
        });
    }
    info(options) {
        if (!document.getElementById("jnDialogCtn")) {
            this.mountVueComponent();
        }

        let defaultOptions = {
            modalTitle: "Modal info tittel.",
            modalBody: "Her står det ennå mer detaljer som kunne har vært interessant til brukeren.",
            rejectButton: {
                visible: false
            },
            resolveButton: {
                visible: true,
                text: "Greit"
            }
        };

        this.jnDialogComp.setOptions({ ...defaultOptions, ...options });
        this.jnDialogComp.showModal(true);

        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                resolve("info read");
            });
        });
    }
}
export const jnDialog = new JnDialogModule();