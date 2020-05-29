import JnDialogComponent from './JnDialogComponent';

const confirmDefault = {
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

const infoDefault = {
    modalTitle: "Modal info tittel.",
    modalBody: "Her står det ennå mer detaljer som kunne har vært interessant til brukeren.",
    rejectButton: {
        visible: false
    },
    resolveButton: {
        visible: true,
        text: "Greit"
    }
}

class JnDialogModule {
    constructor() {
        this.jnDialogCtn = null;
        this.jnDialogComp = null;
    }
    mountVueComponent(props, { header, body } = {}) {
        if (!this.jnDialogCtn) {
            this.jnDialogCtn = document.createElement("div");
            this.jnDialogCtn.id = "jnDialogCtn";
            document.getElementsByTagName("body")[0].appendChild(this.jnDialogCtn);
        } else {
            this.jnDialogCtn.removeChild(this.jnDialogCtn.firstChild);
        }
        if (this.jnDialogComp) this.jnDialogComp.$destroy();

        let offDocumentJnDialogComp = Vue.component(JnDialogComponent.name, JnDialogComponent);
        this.jnDialogComp = new offDocumentJnDialogComp({ propsData: props });

        if (header) {
            this.jnDialogComp.$slots.header = this.jnDialogComp.$createElement(header.node, { props: header.componentProps, domProps: header.domProps });
        }

        if (body) {
            this.jnDialogComp.$slots.body = this.jnDialogComp.$createElement(body.node, { props: body.componentProps, domProps: body.domProps });
        }

        this.jnDialogComp.$mount();
        this.jnDialogCtn.appendChild(this.jnDialogComp.$el);
    }
    setModalProps(props) {
        Object.assign(this.jnDialogComp, props);
    }
    confirm(options) {
        this.mountVueComponent({ ...confirmDefault, ...options });

        this.setModalProps({ ...confirmDefault, ...options })
        this.jnDialogComp.display = true;

        var self = this;
        return new Promise((resolve, reject) => {
            this.jnDialogComp.$on("resolveModal", () => {
                self.jnDialogComp.display = false;
                resolve("jn dialog modal resolved");
            });

            this.jnDialogComp.$on("rejectModal", () => {
                self.jnDialogComp.display = false;
                reject("jn dialog modal rejected");
            });
        });
    }
    info(options) {
        this.mountVueComponent({ ...infoDefault, ...options });

        this.setModalProps({ ...infoDefault, ...options })
        this.jnDialogComp.display = true;

        var self = this;
        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                self.jnDialogComp.display = false;
                resolve("info read");
            });
        });
    }
    richInfo(options, childNodes) {
        this.mountVueComponent({ ...infoDefault, ...options }, childNodes);

        this.setModalProps({ ...infoDefault, ...options })
        this.jnDialogComp.display = true;

        var self = this;
        return new Promise(resolve => {
            this.jnDialogComp.$on("resolveModal", () => {
                self.jnDialogComp.display = false;
                resolve("rich info read");
            });
        });
    }
}
export const jnDialog = new JnDialogModule();