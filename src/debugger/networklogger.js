export default function NetworkLogger(container, socket) {

    socket.on('network', function(data) {

        container.add({
            type: 'html',
            item: data
        });

    });
};