import './styles/toaster.css';

const toasterArea = document.querySelector('.toaster-area');

export function showToast(message: string): void
{
	const toast = document.createElement('div');
	toast.classList.add('toast');
	toast.textContent = message;
	toasterArea?.append(toast);

	setTimeout(() =>
	{
		toast.classList.add('hide');

		setTimeout(() =>
		{
			toast.remove();
		}, 1000);
	}, 3000);
}
