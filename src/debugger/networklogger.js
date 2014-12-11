export default function NetworkLogger(container, socket) {

    socket.on('networkconsole', function(data) {

        container.add({
            type: 'html',
            item: data
        });

    });
};