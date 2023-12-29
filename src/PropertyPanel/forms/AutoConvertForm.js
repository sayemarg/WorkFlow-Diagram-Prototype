const AutoConvertForm = () => {
	return (
		<label className="input-group">
			<span className="label">نوع تبدیل:</span>

			<select>
				<option>تبدیل به درخواست خرید</option>
				<option>تبدیل به سفارش خرید</option>
				<option selected>تبدیل به فاکتور</option>
				<option>تبدیل به رسید تحویل</option>
			</select>
		</label>
	);
};

export default AutoConvertForm;
